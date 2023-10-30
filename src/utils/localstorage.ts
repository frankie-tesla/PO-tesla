class Storage {
  private cache: Map<string, unknown>;

  constructor() {
    this.cache = new Map<string, unknown>();
  }

  set<T>(key: string, value: T): void {
    this.cache.set(key, value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  get<T>(key: string, initialValue?: T): T | undefined {
    try {
      const cachedValue = this.cache.get(key);
      if (cachedValue !== undefined) {
        return cachedValue as T;
      }

      const localStorageValue = window.localStorage.getItem(key);
      if (localStorageValue !== null) {
        return JSON.parse(localStorageValue) as T;
      }

      return initialValue;
    } catch (err) {
      return initialValue;
    }
  }

  clear(): void {
    window.localStorage.clear();
    this.cache.clear();
  }

  remove(key: string): boolean {
    window.localStorage.removeItem(key);
    return this.cache.delete(key);
  }
}

const storage = new Storage();

export default storage;
