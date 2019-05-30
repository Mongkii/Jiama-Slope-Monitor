export const SLOPE_NORMAL = 'slope/normal';
export const SLOPE_EARTHQUAKE = 'slope/earthquake';
export const model_url = [{
  type: SLOPE_NORMAL,
  url: '/bp_model/normal/model.json'
}, {
  type: SLOPE_EARTHQUAKE,
  url: '/bp_model/earthquake/model.json'
}];

export const STATUS_SAFE = 'status/safe';
export const STATUS_WARN = 'status/warn';
export const STATUS_DANGER = 'status/danger';
