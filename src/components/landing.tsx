import { Text } from "./text";
import { Link } from "react-router-dom";

const SelfLink = ({ to }: { to: string }) => (
  <Link to={to}>
    <code>/#{to}</code>
  </Link>
);

export const LandingMessage = () => (
  <>
    <h1>allyref.link</h1>
    <Text>
      Add the spec to the URL like so: <SelfLink to={"/wcag2/1"} /> to go to the
      first WCAG principal, or <SelfLink to="/wcag2/1/1/1" /> to go to the first
      success criterion.
    </Text>
    <Text>
      You can also use the names of principles, guidelines, and criteria, like
      so: <SelfLink to="/wcag2/robust/compatible/name-role-value" />
    </Text>
    <Text>
      You can also use the names of principles, guidelines, or criteria by
      themselves: <SelfLink to="/wcag2/readable" /> or{" "}
      <SelfLink to="/wcag2/target-size-minimum" />
    </Text>
    <Text>
      You can also mix and match numbers and names if you are feeling wild, like
      so: <SelfLink to="/wcag2/4/compatible/1" />
    </Text>
  </>
);
