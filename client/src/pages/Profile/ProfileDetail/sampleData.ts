export interface petImageInfo {
  img: string;
  title: string;
}

export interface Sitter {
  sitterId: string;
  profileBackgroundImg: string;
  userProfileImage: string;
  sitterFirstName: string;
  sitterLastName: string;
  sitterShortDesc: string;
  sitterCity: string;
  sitterProvince: string;
  sitterAboutMe: string;
  sitterPetImages: petImageInfo[];
  sitterWage: number;
  sitterRating: number;
}

export const sampleData: Sitter[] = [
  {
    sitterId: 'test-sitter-1',
    profileBackgroundImg: 'https://source.unsplash.com/600x200/?nature,sky',
    userProfileImage: 'https://source.unsplash.com/150x150/?man',
    sitterFirstName: 'John',
    sitterLastName: 'Doe',
    sitterShortDesc: 'Loving pet sitter',
    sitterCity: 'Toronto',
    sitterProvince: 'Ontario',
    sitterAboutMe:
      'Animals are my passion! I will look after your pets with loving care. I have some availability for pet care in my home as well. I have 10 yrs experience at the Animal Hospital, and have owned multiple pets for many years, including numerous rescues. Kindly email, text or call me and I will respond promptly!',
    sitterPetImages: [
      {
        img: 'https://source.unsplash.com/125x125/?animal,puppy',
        title: 'puppy',
      },
      {
        img: 'https://source.unsplash.com/125x125/?animal,cat',
        title: 'cat',
      },
      {
        img: 'https://source.unsplash.com/125x125/?animal,dog',
        title: 'dog',
      },
    ],
    sitterWage: 14,
    sitterRating: 4,
  },
  {
    sitterId: 'test-sitter-2',
    profileBackgroundImg: 'https://source.unsplash.com/600x200/?nature,sea',
    userProfileImage: 'https://source.unsplash.com/150x150/?woman',
    sitterFirstName: 'Jane',
    sitterLastName: 'Doe',
    sitterShortDesc: 'Loving pet sitter2',
    sitterCity: 'Vancouver',
    sitterProvince: 'British Columbia',
    sitterAboutMe:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    sitterPetImages: [
      {
        img: 'https://source.unsplash.com/125x125/?animal,puppy',
        title: 'puppy',
      },
      {
        img: 'https://source.unsplash.com/125x125/?animal,cat',
        title: 'cat',
      },
      {
        img: 'https://source.unsplash.com/125x125/?animal,dog',
        title: 'dog',
      },
    ],
    sitterWage: 16,
    sitterRating: 5,
  },
];
