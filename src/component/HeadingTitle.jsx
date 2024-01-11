  return (
    <Stack>
      <Stack
        sx={{
          height: "70px",
          display: "flex",
          justifyContent: "space-between",
        }}
        direction={"row"}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h5" color="initial">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="initial"
            sx={{ fontWeight: "100", fontSize: "13px" }}
          >
            {subtitle}
          </Typography>
        </Stack>

        <Stack>
          <Button
            sx={{
              textTransform: "lowercase",
              margin: "auto 0",
              color: "black",
            }}
            variant="outlined"
            size="small"
          >
            {buttonText}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeadingTitle;
