
import dynamic from 'next/dynamic';

const DemoMap = dynamic(() => import('./map/DemoMap'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-[#111111]" />
});

/**
 * EVMapExactReplica - Updated to use DemoMap
 * Renders the interactive map.
 */
export default function EVMapExactReplica() {
    return (
        <div className="absolute inset-0 w-full h-full bg-[#111111] overflow-hidden">
            <DemoMap />
        </div>
    );
}
