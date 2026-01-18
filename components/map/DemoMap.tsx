'use client';

import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Protocol } from 'pmtiles';

// Import all parcel layers
// We will dynamically import them or just bundle them here if they are moved
// For this demo, we'll try to load them from the components/map/data folder
import { ParcelsM00Layer } from './data/parcels-m00.js';
import { ParcelsM01Layer } from './data/parcels-m01.js';
import { ParcelsM02Layer } from './data/parcels-m02.js';
import { ParcelsM03Layer } from './data/parcels-m03.js';
import { ParcelsM04Layer } from './data/parcels-m04.js';
import { ParcelsM05Layer } from './data/parcels-m05.js';
import { ParcelsM06Layer } from './data/parcels-m06.js';
import { ParcelsM07Layer } from './data/parcels-m07.js';
import { ParcelsM08Layer } from './data/parcels-m08.js';
import { ParcelsM09Layer } from './data/parcels-m09.js';
import { ParcelsM10Layer } from './data/parcels-m10.js';
import { ParcelsM99Layer } from './data/parcels-m99.js';

export default function DemoMap() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<maplibregl.Map | null>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (map.current || !mapContainer.current) return;

        // Register PMTiles protocol
        const protocol = new Protocol();
        maplibregl.addProtocol('pmtiles', protocol.tile);

        // Map configuration adapted from main-map-manager.js
        const milanoBounds: [number, number, number, number] = [
            9.0400, 45.3900, // Southwest
            9.3000, 45.5400  // Northeast
        ];

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
            center: [9.1900, 45.4642], // Duomo, Milan
            zoom: 14,
            bearing: 20,
            pitch: 45,
            minZoom: 5.5,
            maxZoom: 20,
            maxBounds: milanoBounds as any,
            interactive: true,
            dragPan: true,
            dragRotate: true,
            scrollZoom: false, // Disable scroll zoom for landing page background
            boxZoom: true,
            attributionControl: false // Cleaner look for demo
        });

        map.current.on('load', async () => {
            console.log('Map loaded, initializing layers...');

            // Initialize Parcel Layers
            const layers = [
                new ParcelsM00Layer(),
                new ParcelsM01Layer(),
                new ParcelsM02Layer(),
                new ParcelsM03Layer(),
                new ParcelsM04Layer(),
                new ParcelsM05Layer(),
                new ParcelsM06Layer(),
                new ParcelsM07Layer(),
                new ParcelsM08Layer(),
                new ParcelsM09Layer(),
                new ParcelsM10Layer(),
                new ParcelsM99Layer()
            ];

            // Add each layer to the map
            // Note: These classes expect a 'toggleButton' in the DOM which we don't have, 
            // but the addToMap method should handle the map addition part gracefully
            for (const layer of layers) {
                if (layer.addToMap && map.current) {
                    await layer.addToMap(map.current as any);
                }
            }

            // Cinematic fly-in effect
            map.current?.flyTo({
                zoom: 15.5,
                pitch: 60,
                bearing: -30,
                duration: 4000,
                essential: true,
                easing: (t) => t * (2 - t)
            });

            setLoaded(true);
        });

        // Cleanup
        return () => {
            map.current?.remove();
            map.current = null;
        };
    }, []);

    // Fake progress simulation
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (loaded) {
            setProgress(100);
            return;
        }

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 90) return prev;
                return prev + Math.random() * 10;
            });
        }, 500);

        return () => clearInterval(interval);
    }, [loaded]);

    return (
        <div className="w-full h-full relative group">
            <div ref={mapContainer} className="absolute inset-0 w-full h-full" />

            {/* Loading Overlay */}
            <div className={`absolute inset-0 z-20 flex items-center justify-center bg-[#050505] transition-opacity duration-1000 ${loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="relative w-64 bg-[#0A0A0A] border border-white/10 rounded-xl p-6 shadow-2xl flex flex-col items-center">
                    {/* Loader Icon/Spinner */}
                    <div className="w-8 h-8 mb-4 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>

                    <h3 className="text-white text-sm font-mono tracking-widest uppercase mb-2">Initializing Reality Map</h3>
                    <p className="text-gray-500 text-[10px] font-mono mb-4">Loading geospatial assets...</p>

                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-500 transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Dark overlay for text readability when map is loaded */}
            <div className={`absolute inset-0 bg-black/20 pointer-events-none transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
        </div>
    );
}
