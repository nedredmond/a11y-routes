import { Text } from "./text";
import { Link } from "react-router-dom";

const SelfLink = ({ to }: { to: string }) => (
  <Link to={to}>
    <code>/#{to}</code>
  </Link>
);

export const LandingMessage = () => (
  <>
    <h1>a11yref.link</h1>
    <Text>
      Add the spec to the URL like so: <SelfLink to={"/wcag22/1"} /> to go to
      the first WCAG principal, or <SelfLink to="/wcag22/1/1/1" /> to go to the
      first success criterion.
    </Text>
    <Text>
      You can also use the names of principles, guidelines, and criteria, like
      so: <SelfLink to="/wcag22/robust/compatible/name-role-value" />
    </Text>
    <Text>
      You can also use the names of principles, guidelines, or criteria by
      themselves: <SelfLink to="/wcag22/readable" /> or{" "}
      <SelfLink to="/wcag22/target-size-minimum" />
    </Text>
    <Text>
      You can also mix and match numbers and names if you are feeling wild, like
      so: <SelfLink to="/wcag22/4/compatible/1" />
    </Text>
    <Text>
      To link directly to the latest spec, skip the version:{" "}
      <SelfLink to="/wcag/1/1/1" />
    </Text>
    <Text>
      Note: Currently, only WCAG 2.2 is supported. If there is interest, I can
      add support for WCAG 2.1 and 2.0. While I would like to additionally
      support ARIA, ATAG, and other standards, those do repositories do not
      include a JSON representation and would require a lot of parsing of HTML.
    </Text>
  </>
);
