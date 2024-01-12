export function useTruncateTxt(txt) {
  return txt?.length > 120 ? `${txt.substring(0, 80)}...` : txt;
}