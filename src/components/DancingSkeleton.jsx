/**
 * DancingSkeleton — A CSS-animated stick figure that dances.
 * Pure CSS keyframes, no external dependencies.
 */
export default function DancingSkeleton({ size = 200, color = 'var(--accent-1)' }) {
  const s = size;
  const headSize = s * 0.12;
  const strokeWidth = Math.max(3, s * 0.025);

  return (
    <div className="dancing-skeleton" style={{ width: s, height: s, position: 'relative' }}>
      <svg
        viewBox="0 0 200 200"
        width={s}
        height={s}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Head */}
        <circle className="skel-head" cx="100" cy="30" r={headSize * (200 / s) * (s / 200)} fill="none" />

        {/* Spine */}
        <line className="skel-spine" x1="100" y1="42" x2="100" y2="110" />

        {/* Left arm */}
        <line className="skel-left-upper-arm" x1="100" y1="58" x2="70" y2="78" />
        <line className="skel-left-forearm" x1="70" y1="78" x2="50" y2="58" />

        {/* Right arm */}
        <line className="skel-right-upper-arm" x1="100" y1="58" x2="130" y2="78" />
        <line className="skel-right-forearm" x1="130" y1="78" x2="150" y2="58" />

        {/* Left leg */}
        <line className="skel-left-thigh" x1="100" y1="110" x2="75" y2="145" />
        <line className="skel-left-shin" x1="75" y1="145" x2="70" y2="180" />

        {/* Right leg */}
        <line className="skel-right-thigh" x1="100" y1="110" x2="125" y2="145" />
        <line className="skel-right-shin" x1="125" y1="145" x2="130" y2="180" />
      </svg>
    </div>
  );
}
