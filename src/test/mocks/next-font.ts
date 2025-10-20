type FontResult = {
  className: string;
  variable?: string;
};

export function local(): FontResult {
  return {
    className: "mocked-font",
  };
}

export function google(): FontResult {
  return {
    className: "mocked-google-font",
  };
}

const mockedFonts = { local, google };

export default mockedFonts;
