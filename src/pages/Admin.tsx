import { Container, Typography } from "@mui/material";

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
              className="h-14 w-full rounded border border-[#484b4d] bg-[#090a0a] px-5 text-lg text-[#f5f5f5]  transition placeholder:text-[#8d8d8d] "
            />

            <button
              type="submit"
              className=" h-14 rounded bg-[#e01822] px-6 text-base font-semibold text-white transition hover:bg-[#f11f2a] "
            >
              Add Band
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Admin;
