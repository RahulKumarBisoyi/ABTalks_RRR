import Container from '../common/Container';
import Panel, { PanelLabel } from '../common/Panel';

export default function MissionObjective({ challenge }) {
  return (
    <section className="py-4">
      <Container>
        <Panel>
          <PanelLabel>Mission Objective</PanelLabel>
          <p className="mt-2.5 text-sm leading-relaxed text-paper/90 sm:text-base">
            {challenge.objective}
          </p>
        </Panel>
      </Container>
    </section>
  );
}
