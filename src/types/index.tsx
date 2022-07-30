export type NotificationType = {
  type: string,
  title: string,
  description: string,
};

export type artListType = {
  artArray: {
    title: string,
    artist_title: string,
    credit_line: string,
    id: number,
    image_id: number,
    thumbnail: {
      alt_text: string
    }
  }[] | [],
  config: string | null,
};

export type notificationType = {
  type: string,
  title: string,
  description: string,
} | null;

export type artInitialStateType = {
  isLoading: boolean,
  artList: artListType,
  notification: notificationType
};


