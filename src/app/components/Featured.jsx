import React from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

const Wrapper = styled.div`
    text-align: center;
    margin-top: 40px;
`;

const Title = styled.div`
    font-family: 'Proxima Nova Semibold';
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
`;

const StyledImageGroup = styled(Image.Group)`
    margin-top: 20px !important;
`;

const StyledImage = styled(Image)`
    opacity: 0.5;
`;

const Featured = () => (
    <Wrapper>
        <Title>
            <FormattedMessage
                id="app.Featured.title"
                defaultMessage="FEATURED ON"
            />
        </Title>
        <StyledImageGroup>
            <a
                href="https://www.stateofthedapps.com/dapps/4tune"
                target="_blank"
                rel="noopener noreferrer"
            >
                <StyledImage src="images/featured/stateofdapps.png" />
            </a>
        </StyledImageGroup>
    </Wrapper>
);

export default Featured;
