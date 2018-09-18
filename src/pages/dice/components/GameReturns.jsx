/**
 * P
 */
import React from 'react';
import { Grid } from 'semantic-ui-react';

import WinningChance from '../containers/WinningChance';
import BetReturns from '../containers/BetReturns';
import JackpotAmount from '../containers/JackpotAmount';

const GameReturns = () => (
    <Grid columns={1}>
        <Grid.Column textAlign="center">
            <WinningChance />
        </Grid.Column>
        <Grid.Column textAlign="center">
            <BetReturns />
        </Grid.Column>
        <Grid.Column textAlign="center">
            <JackpotAmount />
        </Grid.Column>
    </Grid>
);

export default GameReturns;
