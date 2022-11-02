export interface Photo  {
    id: string;
    width: number;
    height: number;
    urls: { full: string; regular: string; raw: string; small_s3: string };
    color: string | null;
    user: {
      username: string;
      name: string;
    };
  };