// React Imports
import { useState } from 'react';
// Material UI Imports
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Component Imports
import ContactFormModal from '../../global/ContactFormModal';

const CallToAction = () => {
  const [showContactFormModal, setShowContactFormModal] = useState(false);

  const handleContactForm = () => {
    setShowContactFormModal(!showContactFormModal);
  };

  return (
    <Container maxWidth="xl" sx={{ pt: '50px', pb: '100px' }}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} md={8}>
          <Typography variant="h4" pb={'2rem'}>
            Empower Change: Become a partner in our civic tech movement.
          </Typography>
          <Typography variant="h4">
            Have an idea for a civic project in Portland or want to partner with us?
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} style={{ textAlign: 'center', alignItems: 'center' }}>
          <Button
            sx={{
              mt: {
                xs: '50px',
                md: '0'
              },
              mr: {
                xs: '0px',
                md: '25%'
              }
            }}
            variant="contained"
            color="primary"
            size="large"
            target="_blank"
            rel="noopener"
            onClick={handleContactForm}
          >
            Contact us
          </Button>
        </Grid>
      </Grid>
      <ContactFormModal
        showContactFormModal={showContactFormModal}
        setShowContactFormModal={setShowContactFormModal}
      />
    </Container>
  );
};

export default CallToAction;
