export const formatToCreatedAt = (createdAt: string) => {
  const date = new Date(createdAt);

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const formattedDate = `С ${day} ${months[month]} ${year}`;

  return formattedDate;
};
