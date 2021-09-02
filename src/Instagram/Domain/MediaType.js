class MediaType {
  static TYPE_PICTURE = 'picture';
  static TYPE_VIDEO = 'video';
  static TYPE_MULTIPLE_PICTURE = 'multiple_picture';

  static INSTAGRAM_TYPE_PICTURE = 'GraphImage';
  static INSTAGRAM_TYPE_VIDEO = 'GraphVideo';
  static INASTAGRAM_TYPE_MULTIPLE_PICTURE = 'GraphSidecar';

  #matching;
  
  constructor() {
    const matching = {};
    matching[MediaType.INSTAGRAM_TYPE_PICTURE] = MediaType.TYPE_PICTURE;
    matching[MediaType.INSTAGRAM_TYPE_VIDEO] = MediaType.TYPE_VIDEO;
    matching[MediaType.INASTAGRAM_TYPE_MULTIPLE_PICTURE] = MediaType.TYPE_MULTIPLE_PICTURE;
    this.#matching = matching;
  }

  get matching() {
    return this.#matching;
  }
}

export default MediaType;