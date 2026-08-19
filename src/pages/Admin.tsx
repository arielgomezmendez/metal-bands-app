import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const bands = [
  {
    id: 1,
    name: "Black Sabbath",
  },
];

const Admin = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 text-[#f5f5f5] sm:px-6 lg:px-8">
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

      <div className="mt-6 rounded-lg border border-[#2f3030] bg-[#0d0f0f] px-5 py-7 text-left shadow-[0_0_45px_rgba(0,0,0,0.35)] sm:px-7">
        <Typography
          component="h2"
          variant="h5"
          sx={{ fontWeight: 600, marginBottom: 4 }}
          color="#F5F5F5"
        >
          Add New Band
        </Typography>

        <form className="space-y-4">
          <label
            htmlFor="bandName"
            className="block text-lg font-bold text-[#b8b8b8]"
          >
            Band Name
          </label>

          <div className="grid gap-5 md:grid-cols-[1fr_186px] md:items-center">
            <input
              id="bandName"
              name="bandName"
              type="text"
              placeholder="e.g. Iron Maiden"
              className="h-14 w-full rounded border border-[#484b4d] bg-[#090a0a] px-5 text-lg text-[#f5f5f5] transition placeholder:text-[#8d8d8d]"
            />

            <button
              type="submit"
              className="h-14 rounded bg-[#df3c39] px-6 text-base font-semibold text-white transition hover:bg-[#df3c39]"
            >
              Add Band
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 rounded-lg border border-[#2f3030] bg-[#0d0f0f] px-5 py-7 text-left shadow-[0_0_45px_rgba(0,0,0,0.35)] sm:px-7">
        <Typography
          component="h2"
          variant="h5"
          sx={{ fontWeight: 600 }}
          color="#F5F5F5"
        >
          <QueueMusicIcon sx={{ color: "#df3c39", fontSize: 32, marginRight:2 }} />
          Bands List
        </Typography>

        <TableContainer>
          <Table aria-label="Bands list">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#1a1a1a" }}>
                <TableCell sx={{ color: "#B0B0B0", fontWeight: 700 }}>
                  ID
                </TableCell>
                <TableCell sx={{ color: "#B0B0B0", fontWeight: 700 }}>
                  BAND NAME
                </TableCell>
                <TableCell sx={{ color: "#B0B0B0", fontWeight: 700 }}>
                  ACTIONS
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {bands.map((band) => (
                <TableRow
                  key={band.id}
                  sx={{
                    borderBottom: "1px solid #242424",
                    "&:last-child td": { borderBottom: 0 },
                  }}
                >
                  <TableCell sx={{ color: "#F5F5F5", borderColor: "#242424" }}>
                    {band.id}
                  </TableCell>
                  <TableCell sx={{ color: "#F5F5F5", borderColor: "#242424" }}>
                    {band.name}
                  </TableCell>
                  <TableCell sx={{ borderColor: "#242424" }}>
                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        className="flex items-center gap-2 rounded border border-[#f0b400] px-4 py-2 text-sm font-semibold uppercase text-[#f0b400] transition hover:bg-[#f0b400] hover:text-[#0d0f0f]"
                      >
                        <EditIcon sx={{ fontSize: 18 }} />
                        Edit
                      </button>
                      <button
                        type="button"
                        className="flex items-center gap-2 rounded border border-[#df3c39] px-4 py-2 text-sm font-semibold uppercase text-[#df3c39] transition hover:bg-[#df3c39] hover:text-white"
                      >
                        <DeleteIcon sx={{ fontSize: 18 }} />
                        Delete
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default Admin;
