import { Trans } from '@lingui/react/macro';
import { Link, Typography } from '@mui/material';

import { ROUTES } from '../../primitives/Link';
import { Warning } from '../../primitives/Warning';

export const MOREWarning = () => {
  return (
    <Warning severity="info">
      <Typography>
        <Trans>Supplying your </Trans> MORE{' '}
        <Trans>tokens is not the same as staking them. If you wish to stake your </Trans> MORE{' '}
        <Trans>tokens, please go to the </Trans>{' '}
        <Link href={ROUTES.staking}>
          <Trans>staking view</Trans>
        </Link>
      </Typography>
    </Warning>
  );
};
