"use client";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Stack from "@mui/system/Stack";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: 4,
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
}));

export default function Home() {
  return (
    <div>
      <Box
        sx={{
          border: "2px solid #FF5733", // Bright orange border
        }}
      >
        <Container
          sx={{
            bgcolor: "#cfe8fc",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            paddingInline: 0,
            border: "2px solid #33FF57", // Bright green border
          }}
        >
          {/* Header Section */}
          <Container
            sx={{
              width: "100%",
              height: "7rem",
              bgcolor: "#cfe834",
              paddingInline: "3rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              border: "2px solid #5733FF", // Bright purple border
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                paddingBlock: "1rem",
                border: "2px solid #FFC300", // Bright yellow border
              }}
            >
              {/* Brand Name */}
              <Box
                sx={{
                  color: "red",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  border: "2px solid #33D4FF", // Bright cyan border
                }}
              >
                Brand Name
              </Box>

              {/* Search Box */}
              <Box
                component="section"
                sx={{
                  p: 1,
                  border: "2px solid grey",
                  width: "20rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  border: "2px solid #FF5733", // Bright orange border
                  "@media (max-width: 600px)": {
                    display: "none", // Hide on small screens
                  },
                }}
              >
                <SearchIcon />
                <TextField
                  variant="standard"
                  placeholder="Search..."
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                />
              </Box>

              {/* User Section */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: ".5rem",
                  border: "2px solid #33FF57", // Bright green border
                }}
              >
                <Avatar />
                <Box
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    "@media (max-width: 600px)": {
                      display: "none", // Hide the name but keep the avatar
                    },
                  }}
                >
                  John
                </Box>
              </Box>
            </Stack>
          </Container>

          {/* Main Content Section */}
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              padding: "2rem",
              border: "2px solid #5733FF", // Bright purple border
            }}
          >
            {/* Left Column */}
            <Box
              sx={{
                flex: 1,
                border: "2px solid #FFC300", // Bright yellow border
                borderRadius: 2,
                p: 2,
                height: "80vh",
                bgcolor: "#ffffff",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                ml: "12rem", // Space before left box
                "@media (max-width: 600px)": {
                  ml: 0, // Remove space on small screens
                },
              }}
            >
              Left Content
            </Box>

            {/* Right Column */}
            <Box
              sx={{
                flex: 1,
                border: "2px solid #33D4FF", // Bright cyan border
                borderRadius: 2,
                p: 2,
                height: "70vh",
                bgcolor: "#ffffff",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                "@media (max-width: 600px)": {
                  display: "none", // Hide on small screens
                },
              }}
            >
              Right Content
            </Box>
          </Container>
        </Container>
      </Box>
    </div>
  );
}
