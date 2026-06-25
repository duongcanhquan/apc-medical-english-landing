import { useSwiperSlide } from 'swiper/react';
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

function SlideFxGate({ FxComponent }) {
  const { isActive } = useSwiperSlide();
  if (!isActive || !FxComponent) return null;
  return <FxComponent />;
}

const FX_MAP = {
  'heartbeat-rings': HeartbeatRingsBackground,
  'ecg-pulse': ECGPulseBackground,
  'dna-helix': DNAHelixBackground,
  'blood-flow': BloodFlowBackground,
  'brain-waves': BrainWavesBackground,
  'synapse-web': SynapseWebBackground,
  'laser-pathway': LaserPathwayBackground,
  'vitals-monitor': VitalsMonitorBackground,
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
    dark: 'bg-gradient-to-b from-medical-950/94 via-medical-900/88 to-medical-950/96',
    aurora: 'bg-gradient-to-br from-medical-950/92 via-cyan-950/78 to-blue-950/88',
    lab: 'bg-gradient-to-t from-medical-950/96 via-slate-900/85 to-medical-900/72',
    warm: 'bg-gradient-to-b from-medical-950/92 via-rose-950/45 to-medical-950/95',
    pulse: 'bg-gradient-to-br from-medical-950/93 via-red-950/35 to-medical-950/94',
    neural: 'bg-gradient-to-b from-medical-950/93 via-violet-950/38 to-medical-950/95',
  };

  const FxComponent = fx ? FX_MAP[fx] : null;

  return (
    <div className="relative h-full min-h-0 w-full overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className={`absolute inset-0 ${overlays[overlay] || overlays.dark}`} />
      <SlideFxGate FxComponent={FxComponent} />
      <div className="slide-scroll relative z-10 flex h-full min-h-0 w-full flex-col overflow-x-hidden overflow-y-auto overscroll-y-contain px-4 md:px-8 lg:px-10">
        {children}
      </div>
    </div>
  );
}
