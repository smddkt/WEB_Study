import React from 'react';
import {CSSContainerRule, Box, createTheme, ThemeProvider } from '@mui/material';
import {makeStyles} from '@mui/styles';

const theme = createTheme({
    spacing: 8,
});

const useStyles = makeStyles((theme) => ({
    box: {
        padding: theme.spacing(12),
    }
}))


function FullWidthGrid() {
    return (
        <Container>
            <Grid container spacing = {2}>
                <Grid item xs={12}>
                    <Paper style = {{padding: '16px', textAlign: 'center', backgroundColor: '#f0f0f0'}}></paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default FullWidthGrid



import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
`;

const GridItem = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const Paper = styled.div`
  padding: 16px;
  text-align: center;
  background-color: #f0f0f0;
`;

const papertailwind = ({ children }) => (
    <div className = "p-4 text-center bg-gray-200">
        {children}
    </div>
);


function FullWidthGrid2() {
  return (
    <Container>
      <Grid>
        <GridItem>
          <Paper>
            Full Width Grid Item (xs=12)
          </Paper>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default FullWidthGrid2;
