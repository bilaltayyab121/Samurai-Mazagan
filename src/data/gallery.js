export const galleryCategories = [
  { id: 'all', name: 'All' },
  { id: 'interior', name: 'Interior' },
  { id: 'food', name: 'Food' },
  { id: 'rooftop', name: 'Rooftop' },
  { id: 'atmosphere', name: 'Atmosphere' },
  { id: 'events', name: 'Events' }
];

const createGalleryImage = (image, objectPosition = "center center") => ({
  image,
  objectPosition,
});

export const galleryImages = [
  {
    id: 1,
    category: "interior",
    title: "Maps Photo 01",
    description: "Google Maps photo from Samurai Mazagan",
    ...createGalleryImage(
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnLtHp763wFNb9FXgoW5aIRTK17wjW0cztYSbqnXM2ipmnmvJeY-Amq-P4kUSeQkJ6YtHQksuAxn2Ns9niYckBsYHaqL3hZjbcK2-on6N4uK7newSHBcqTyXwtiL9BzxhpF9jDqXQ=s508-k-no",
    ),
    featured: true,
  },
  {
    id: 2,
    category: "food",
    title: "Maps Photo 02",
    description: "Google Maps photo from Samurai Mazagan",
    ...createGalleryImage(
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkGRPobez9xs0TdRT9J9AN4VuJ3T_xOuUXpC1cgK-T86ybxHZArUK4N0kTUUdsDA-iaXDEszdLo-cL25268budoMeuamaD15EawwI5_8FUJfek3Ua4A0Q-hlJ8cByrbfPYOUZ0=w203-h360-k-no",
    ),
    featured: true,
  },
  {
    id: 3,
    category: "rooftop",
    title: "Maps Photo 03",
    description: "Google Maps photo from Samurai Mazagan",
    ...createGalleryImage(
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlht4lTgECJKvp42n8xOaAi21llOrks8Tc3X0lf2XrPAFlUUvTn095QPJbO1mEpL_VnVYHtQ1VMUxQsgPiZ-dv_s7GTRuOPm-fswV0o0YipsTJ4fO8BTI3utcCnTZP8CSQ8cWQjUGnXJpqC=s387-k-no",
    ),
    featured: true,
  },
  {
    id: 4,
    category: "atmosphere",
    title: "Maps Photo 04",
    description: "Google Maps photo from Samurai Mazagan",
    ...createGalleryImage(
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmRxr3jSI-Vaq79iu54Ey9_2lRHgPG4czcCex9oEmTJVlwg6vkd7yp4oM5TanbSesYH5xchHc1NqaweHY6ZvosRMEnwUT4KBPFOUPs3OsMCCW7mt0_CdqMQ1pCnXVpQB-se9D5XFvctDeiy=s508-k-no",
    ),
    featured: false,
  },
  {
    id: 5,
    category: "food",
    title: "Maps Photo 05",
    description: "Google Maps photo from Samurai Mazagan",
    ...createGalleryImage(
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWncf5OkWRZh-dkgGlinKcwaZRtwL4OtX70v0LbfpGWyZskD_AezpdZpajjcjZawDxpei1Z6pny7lDAhsvLhVdQhdYnYnsP90AlVmoIuwupdk4o7tTpMsvgddhrROnDVXsg-3laW=s508-k-no",
    ),
    featured: true,
  },
  {
    id: 6,
    category: "interior",
    title: "Maps Photo 06",
    description: "Google Maps photo from Samurai Mazagan",
    ...createGalleryImage(
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWknSLmaYQnAcBxZvq4NUibsaq0PbaldGqBJxlo_pvRK6r4yaeKbQta-7V9eVL5lU2B3fpi3b4xmDdGtPp8Y9QGdWGseUVFwYmubVuXCszuuI7lXKAr2VyKrlUVXBID6zrtta_s-RcLHwTy9=s387-k-no",
    ),
    featured: false,
  },
  {
    id: 7,
    category: "events",
    title: "Maps Photo 07",
    description: "Google Maps photo from Samurai Mazagan",
    ...createGalleryImage(
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnsfgx0fPfz--DIRVlS9Vw159Ee573I-BQ56lw5tnja-Le4-dultq9rDCq86kL0AtDRO6lFikp-FAdUmn5Xam2Zz6UeFBjuIRcGfzpAAPw1cd1doVxke0pGAWQnDdxpclWeSzdAPFcaAqsm=s451-k-no",
    ),
    featured: true,
  },
  {
    id: 8,
    category: "food",
    title: "Maps Photo 08",
    description: "Google Maps photo from Samurai Mazagan",
    ...createGalleryImage(
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk3Ck9FVeMS-ovcmrGXN9B035XELvr_Q1CznlGyYqYUn9vz-hj4486kgr2Y1sNpWZl1_oUdG0Fs8qkBgpbUApBbvb9XxRgm9JjRktqi563lurenAwwYThsJp6kHVHLzlcERRYT90bNbwGrh=s508-k-no",
    ),
    featured: true,
  },
  {
    id: 9,
    category: "atmosphere",
    title: "Maps Photo 09",
    description: "Google Maps photo from Samurai Mazagan",
    ...createGalleryImage(
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmYzuuM1xhut2sUYPthftMInQdqNIOHwUXezzLbgT5SxGRXIqgmgYZfbNYlShgG29uVtan9jDG9cOiTpPtVxeAWGoDFlggH-kp1rqDcpiwgBql3Tea0cTmlfsgK85Wn0x0x5tnAuqEUP319=s677-k-no",
    ),
    featured: false,
  },
  {
    id: 10,
    category: "rooftop",
    title: "Maps Photo 10",
    description: "Google Maps photo from Samurai Mazagan",
    ...createGalleryImage(
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkQGqry-toQHba-jFLltC4Xu4X-D0GAabXtuZUs9nlx-jkspbejjydwtX0rkRhlsOW_QgAJs0UGlqn5wFw5DLdmR10k16xMKaJr5gRQkkCXlrII4AwBu-Zx8-6pYx6DLjgQHZn_YUN875ow=s677-k-no",
    ),
    featured: true,
  },
  {
    id: 11,
    category: "interior",
    title: "Maps Photo 11",
    description: "Google Maps photo from Samurai Mazagan",
    ...createGalleryImage(
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmEMBmK2WkzY7bs9RDgNm9Agr0VQ_tt2GzgnYJQi_qDSx3PKS1XNnN6mdw_Ve-tizVwrw7AK-NDmnseZFYHLTGE7rWw8xFyPpW6IQUoARQNJoiKwJmJ8pdKLEBUDgHT2rny-3vVVA=s451-k-no",
    ),
    featured: false,
  },
  {
    id: 12,
    category: "food",
    title: "Maps Photo 12",
    description: "Google Maps photo from Samurai Mazagan",
    ...createGalleryImage(
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmqIBuX7w_za5Np54Z2TFXSatujGpv4DpBMRRZRI0tJbqWZiJ8GnvMH8AYDV2Sc26mMPSx4sQdiCMYGlaAlIgOW7SP6d6WTOm4jbgTK0JQp1YF4WX4SzpCiXve4-30c761XsU4DbzC1Cr0=s677-k-no",
    ),
    featured: false,
  },
  {
    id: 13,
    category: "events",
    title: "Maps Photo 13",
    description: "Google Maps photo from Samurai Mazagan",
    ...createGalleryImage(
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnuQ8uaeFneZDOhSdy69YbZ_yvR7-TEd0L72WSxKabMwhw6xc1kMt-fRah97crCti5hoA1F88JG7-H2nqlk2S_MbSdI_CBgsJ2vKFc0RIdcILKAascugadthWNhm01oo0Pff9FLf_E78kzy=s508-k-no",
    ),
    featured: false,
  },
  {
    id: 14,
    category: "atmosphere",
    title: "Maps Photo 14",
    description: "Google Maps photo from Samurai Mazagan",
    ...createGalleryImage(
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWndWHbCs_s9PGbvRYOfmytCjwNHXRQX5VtosMUDVz2Lkn2MWAqk4FsC7HH-ZLh4e2_bmpVIHKCzuwkyXuqwtdrUY_7EkgnsMtzXGDWNF_k-Zoh5hMaRA4CdJBk8UJ-GvoYo-cwa=s451-k-no",
    ),
    featured: false,
  },
  {
    id: 15,
    category: "food",
    title: "Maps Photo 15",
    description: "Google Maps photo from Samurai Mazagan",
    ...createGalleryImage(
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk0c2u6vLGopIcW5Nl33eHxRi379v1kQCP0MBq-jv8B_9I1V9Evx0X3fouIWGemycFfB6GPILoOYYgdGRG6qyKue2Qmd0PhJo1t7Q0R1vtJ6SLFug6YBoUBXKdKZG8EyZteDTxGJXG7L0OU=s677-k-no",
    ),
    featured: true,
  },
  {
    id: 16,
    category: "rooftop",
    title: "Maps Photo 16",
    description: "Google Maps photo from Samurai Mazagan",
    ...createGalleryImage(
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkG_UTv0KEdU6Ixq9Cw5U80L0FbF3E3C2qQm6EW4K6f_dd10l-23YveGUJgDvq1bz35OkQXiQVtnp6cegrEK2_cA3gH7in3aqPQWGOyfw-8Vl6h1KJBneh6DYJ7ED87BGBJ2qWyGQ=s677-k-no",
    ),
    featured: false,
  },
];
