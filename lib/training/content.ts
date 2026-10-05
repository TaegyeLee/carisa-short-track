export type TrainingCard = {
  step: string;
  title: string;
  description: string;
};

export const drylandCards: TrainingCard[] = [
  {
    step: "01",
    title: "Foundational Fitness",
    description:
      "Strength, mobility, balance and core control build the physical foundation for skating.",
  },
  {
    step: "02",
    title: "Explosive Power",
    description:
      "Jumps, plyometrics and sprint work develop the explosive power needed for starts and acceleration.",
  },
  {
    step: "03",
    title: "Speed & Endurance",
    description:
      "Running, cycling and interval training develop speed, aerobic fitness and the ability to repeat hard efforts.",
  },
];

export const onIceCards: TrainingCard[] = [
  {
    step: "01",
    title: "Starts",
    description:
      "The first few metres can shape the entire race. Athletes train explosive starts, first steps and acceleration into the opening corner.",
  },
  {
    step: "02",
    title: "Passing & Race Tactics",
    description:
      "Short track is not simply about being the fastest skater. Timing, positioning and decision-making determine when and where to make a pass.",
  },
  {
    step: "03",
    title: "Cornering",
    description:
      "Carrying speed through the corner is one of the defining skills of short track. Focus on low position, crossovers, edge control, inside-hand technique and exit acceleration.",
  },
  {
    step: "04",
    title: "Distance & Race Simulation",
    description:
      "500m, 1000m and 1500m demand different combinations of speed, endurance and tactics. Training includes race simulations and repeated high-intensity efforts.",
  },
];

export const specializedCards: TrainingCard[] = [
  {
    step: "01",
    title: "Corner Belt",
    description:
      "A specialized resistance drill used to develop corner position, edge control and strength through the turn.",
  },
  {
    step: "02",
    title: "Slide Board",
    description:
      "Dryland movement that develops lateral push, balance and skating-specific leg strength.",
  },
  {
    step: "03",
    title: "Resistance Training",
    description:
      "Bands and resistance work help athletes develop skating-specific power and control.",
  },
  {
    step: "04",
    title: "Race Simulation",
    description:
      "Starts, positioning, passing and acceleration are combined under race-like conditions.",
  },
];
