type CookieHandler = {
  setCookie(key: string, value: string, maxAge: number): void;
  getCookie(key: string): string | null;
  deleteCookie(key: string): void;
};

class Cookie implements CookieHandler {
  setCookie(key: string, value: string, maxAge: number): void {
    const cookieString = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; max-age=${maxAge}`;

    document.cookie = cookieString;
  }

  getCookie(key: string): string | null {
    const cookies = decodeURIComponent(document.cookie).split(";");

    const findedCookieData = cookies.find((cookie) => cookie.trim().startsWith(`${key}=`));

    if (findedCookieData) {
      return findedCookieData.split("=")[1];
    }
    return null;
  }

  deleteCookie(key: string): void {
    document.cookie = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}

const cookie = new Cookie();

export default cookie;
