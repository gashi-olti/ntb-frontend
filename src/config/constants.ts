const constants = {
  pageTitle: "nativeteams.blogs",
  pagination: {
    defaultPerPage: 10 as number,
    rowsPerPageOptions: [5, 10, 25, 50] as number[],
  },
} as const;

export default constants;
