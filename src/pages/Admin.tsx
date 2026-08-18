import { Typography, Container } from '@mui/material'

const Admin = () => {
  return (
    <>
      <section>
        <Container>
          <Typography
            component="h1"
            variant="h3"
            gutterBottom
            sx={{ fontWeight: "bold", marginTop: "4%" }}
            color="#F5F5F5"
          >
            Admin Panel
          </Typography>
          <Typography component="p" color="#B0B0B0">
            Manage the bands used in the application.
          </Typography>
        </Container>
      </section>
    </>
  )
}

export default Admin
