import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Segment } from 'semantic-ui-react';
import {
    Button,
    Divider,
    Grid,
    Header,
    Icon,
    Search,
  } from 'semantic-ui-react';
  const SegmentExamplePlaceholderGrid = () => (
    <Segment placeholder>
       
      <Grid columns={2} stackable textAlign='center'>
        <Divider vertical>Or</Divider>
  
        <Grid.Row verticalAlign='middle'>
          <Grid.Column>
            <Header icon>
              <Icon name='search' />
              Find Country
            </Header>
  
            <Search placeholder='Search countries...' />
          </Grid.Column>
  
          <Grid.Column>
            <Header icon>
              <Icon name='world' />
              Add New Country
            </Header>
            <Button primary>Create</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
export default function HomePage() {
return(

<Segment placeholder >
<Container text>
<Grid columns={2} stackable textAlign='center'>
  <Divider vertical>Or</Divider>

  <Grid.Row verticalAlign='middle'>
    <Grid.Column>
      <Header icon>
        <Icon name='search' />
        Find Country
      </Header>

      <Search placeholder='Search countries...' />
    </Grid.Column>

    



    <Grid.Column>
      <Header icon>
        <Icon name='users' />
        View/Create Events
      </Header>
      
      <Button primary>Create</Button>
      <h3>Go to <Link to='/activities'>Activities</Link> </h3>
    </Grid.Column>
  </Grid.Row>

  
</Grid>
    
</Container>
</Segment> 


)

}