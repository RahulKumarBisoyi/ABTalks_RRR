// Thin wrapper around localStorage. Namespaced keys + safe JSON handling so
// the rest of the app never touches window.localStorage directly.

const NAMESPACE = 'abtalks';

function key(name) {
  return `${NAMESPACE}:${name}`;
}

export function loadState(name, fallback = null) {
  try {
    const raw = window.localStorage.getItem(key(name));
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch (err) {
    console.warn(`[storage] failed to load "${name}"`, err);
    return fallback;
  }
}

export function saveState(name, value) {
  try {
    window.localStorage.setItem(key(name), JSON.stringify(value));
    return true;
  } catch (err) {
    console.warn(`[storage] failed to save "${name}"`, err);
    return false;
  }
}

export function clearState(name) {
  try {
    window.localStorage.removeItem(key(name));
    return true;
  } catch (err) {
    console.warn(`[storage] failed to clear "${name}"`, err);
    return false;
  }
}

export function clearAllAbtalksState() {
  try {
    Object.keys(window.localStorage)
      .filter((k) => k.startsWith(`${NAMESPACE}:`))
      .forEach((k) => window.localStorage.removeItem(k));
    return true;
  } catch (err) {
    console.warn('[storage] failed to clear all state', err);
    return false;
  }
}

export const STORAGE_KEYS = {
  STUDENT: 'student',
};
