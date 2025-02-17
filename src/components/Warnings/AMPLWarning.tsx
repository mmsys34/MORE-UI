import { Trans } from "@lingui/react/macro";

import { Link } from '../primitives/Link';

export const AMPLWarning = () => {
  return (
    <Trans>
      <b>Ampleforth</b> is a rebasing asset. Visit the{' '}
      <Link
        href="https://docs.more.markets/developers/v/2.0/guides/ampl-asset-listing"
        underline="always"
      >
        <Trans>documentation</Trans>
      </Link>{' '}
      to learn more.
    </Trans>
  );
};
