import {
  HeartbeatRingsBackground,
  ECGPulseBackground,
  DNAHelixBackground,
  BloodFlowBackground,
  BrainWavesBackground,
  SynapseWebBackground,
  LaserPathwayBackground,
  VitalsMonitorBackground,
} from '../motion/SlideBackgroundFX';

const FX_MAP = {
  'heartbeat-rings': HeartbeatRingsBackground,
  'ecg-pulse': ECGPulseBackground,
  'dna-helix': DNAHelixBackground,
  'blood-flow': BloodFlowBackground,
  'brain-waves': BrainWavesBackground,
  'synapse-web': SynapseWebBackground,
  'laser-pathway': LaserPathwayBackground,
  'vitals-monitor': VitalsMonitorBackground,
  // legacy aliases
  'neural-network': BrainWavesBackground,
  'neural-why': SynapseWebBackground,
  'clinical-pathway': LaserPathwayBackground,
};

export default function SlideShell({
  image,
  alt,
  children,
  overlay = 'dark',
  fx = null,
}) {
  const overlays = {
    dark: 'bg-gradient-to-b from-medical-950/88 via-medical-900/78 to-medical-950/94',
    aurora: 'bg-gradient-to-br from-medical-950/82 via-cyan-950/60 to-blue-950/75',
    lab: 'bg-gradient-to-t from-medical-950/94 via-slate-900/70 to-medical-900/58',
    warm: 'bg-gradient-to-b from-medical-950/85 via-rose-950/30 to-medical-950/92',
    pulse: 'bg-gradient-to-br from-medical-950/88 via-red-950/25 to-medical-950/90',
    neural: 'bg-gradient-to-b from-medical-950/88 via-violet-950/25 to-medical-950/92',
  };

  const FxComponent = fx ? FX_MAP[fx] : null;

  return (
    <div className="relative h-full w-full overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className={`absolute inset-0 ${overlays[overlay] || overlays.dark}`} />
      {FxComponent && <FxComponent />}
      <div className="relative z-10 flex h-full w-full flex-col overflow-y-auto overflow-x-hidden px-4 py-14 pb-20 md:px-10 md:py-20 md:pb-28">
        {children}
      </div>
    </div>
  );
}
