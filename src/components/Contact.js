import React, { useState } from 'react'
import {
  Button,
  Grid,
  TextField,
  Select,
  MenuItem,
  Paper,
  Typography,
} from '@mui/material'

const Contact = () => {
  const [contacts, setContacts] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [status, setStatus] = useState('active')
  const [editingIndex, setEditingIndex] = useState(null)

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handleStatusChange = (event) => {
    setStatus(event.target.value)
  }

  const handleSaveContact = () => {
    if (editingIndex !== null) {
      // Editing an existing contact
      const updatedContacts = [...contacts]
      updatedContacts[editingIndex] = { firstName, lastName, status }
      setContacts(updatedContacts)
      setEditingIndex(null)
    } else {
      // Adding a new contact
      if (firstName && lastName) {
        const newContact = { firstName, lastName, status }
        setContacts([...contacts, newContact])
      }
    }
    setFirstName('')
    setLastName('')
    setStatus('active')
  }

  const handleEditContact = (index) => {
    const contactToEdit = contacts[index]
    setFirstName(contactToEdit.firstName)
    setLastName(contactToEdit.lastName)
    setStatus(contactToEdit.status)
    setEditingIndex(index)
  }

  const handleDeleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index)
    setContacts(updatedContacts)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} sx={{ margin: 'auto' }}>
        <Paper
          sx={{
            padding: 5,
            backgroundImage:
              'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyR2fbD18vqa6gpCkNqAJulFMMsz4d9g8wcpbomjDCi3HHsDiwgynqwN_ebYcQxEVXQDI&usqp=CAU)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          elevation={2}
        >
          <Typography
            sx={{
              textAlign: 'center',
              marginBottom: 2,
              fontWeight: 'bold',
              fontSize: 18,
              textDecoration: 'underline',
            }}
          >
            Create Contact
          </Typography>
          <TextField
            label="First Name"
            fullWidth
            value={firstName}
            onChange={handleFirstNameChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Last Name"
            fullWidth
            value={lastName}
            onChange={handleLastNameChange}
          />
          <Select
            label="Status"
            value={status}
            onChange={handleStatusChange}
            style={{ marginTop: '16px' }}
            fullWidth
          >
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </Select>
          <Button
            onClick={handleSaveContact}
            style={{ marginTop: '16px' }}
            fullWidth
            variant="contained"
            color="primary"
          >
            {editingIndex !== null ? 'Update' : 'Save'}
          </Button>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <h3 style={{ textDecoration: 'underline' }}>Contact List:</h3>
      </Grid>

      {contacts.map((contact, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Paper
            sx={{ padding: 3, height: 200, backgroundColor: 'ThreeDFace' }}
            elevation={3}
          >
            <h2>
              Name: {contact.firstName} {contact.lastName}
            </h2>
            <h3>Status: {contact.status}</h3>
            <Button
              onClick={() => handleEditContact(index)}
              style={{ marginTop: '8px' }}
              variant="contained"
              color="success"
              sx={{ marginRight: 2 }}
            >
              Edit
            </Button>
            <Button
              onClick={() => handleDeleteContact(index)}
              style={{ marginTop: '8px' }}
              variant="contained"
              color="error"
            >
              Delete
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default Contact
