/**
 * Utility functions for NicaDrive
 */

/**
 * Normalizes a string by removing accents (diacritics) and converting to lowercase.
 * Useful for case-insensitive and accent-insensitive search.
 * @param {string} str - The string to normalize.
 * @returns {string} - The normalized string.
 */
function normalizeString(str) {
    if (!str) return '';
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
