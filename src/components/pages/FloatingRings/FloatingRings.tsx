export default function FloatingRings() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute rounded-full border border-blue-400/15
        w-[500px] h-[500px] -right-24 -top-20
        animate-[floatRing_8s_ease-in-out_infinite]" />

      <div className="absolute rounded-full border border-blue-400/15
        w-[300px] h-[300px] right-16 top-16
        animate-[floatRing_8s_ease-in-out_infinite_-2s]" />

      <div className="absolute rounded-full border border-yellow-600/12
        w-[180px] h-[180px] right-40 top-40
        animate-[floatRing_8s_ease-in-out_infinite_-4s]" />

      <div className="absolute rounded-full border border-blue-400/15
        w-[80px] h-[80px] right-52 top-52
        animate-[floatRing_8s_ease-in-out_infinite_-6s]" />
    </div>
  );
}