
interface Proptypes{
  classname? :string; 
}

export default function FloatingRings({ classname }: Proptypes) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${classname}`}>
      <div className="absolute rounded-full border border-blue-400/15
        w-200 h-200 -right-20 -top-20
        animate-floatRing" />

      <div className="absolute rounded-full border border-blue-400/15
        w-150 h-150 right-16 top-16
        animate-floatRing" />

      <div className="absolute rounded-full border border-yellow-600/12
        w-400 h-400 right-55 top-50
        animate-floatRing" />

      <div className="absolute rounded-full border border-blue-400/15
        w-50 h-50 right-90 top-80
        animate-floatRing" />
    </div>
  );
}