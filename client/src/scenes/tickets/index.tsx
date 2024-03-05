import React, { useState } from 'react';
import { Box, Button, TextField, Typography} from '@mui/material';
import DashboardBox from '@/components/DashboardBox';
import FlexBetween from '@/components/FlexBetween';

interface TicketFormProps {
  onSubmit: (title: string, description: string) => void;
}

const Ticket: React.FC<TicketFormProps> = ({ onSubmit }) => {
  const [ticketTitle, setTicketTitle] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');

  const handleFormSubmit = () => {
    // Call the onSubmit function with the entered data
    onSubmit(ticketTitle, ticketDescription);
  };

  return (
    <DashboardBox width="100%" height="100%" p="1rem" overflow="hidden">
        <FlexBetween m="1rem 2.5rem" gap="1rem">
            <Box>
            <Typography variant="h3">Submit a Ticket</Typography>
            <TextField
                label="Ticket Title"
                fullWidth
                value={ticketTitle}
                onChange={(e) => setTicketTitle(e.target.value)}
                margin="normal"
            />
            <TextField
                label="Ticket Description"
                multiline
                rows={4}
                fullWidth
                value={ticketDescription}
                onChange={(e) => setTicketDescription(e.target.value)}
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleFormSubmit}>
                Submit
            </Button>
            </Box>
        </FlexBetween>
    </DashboardBox>
  );
};

export default Ticket;