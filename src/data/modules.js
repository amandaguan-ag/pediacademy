import {MedicalInformation, RestaurantRounded, FmdBadRounded, DirectionsBikeRounded, HealthAndSafety, FavoriteRounded, MedicationLiquid, MonitorHeartRounded, HealingRounded, LocalHospitalRounded, BloodtypeRounded, CalendarMonthRounded} from "@mui/icons-material";

export const childModules = [
  {
    id: 'diabetes-basics',
    title: 'Understanding Diabetes',
    description: 'Explore what diabetes is, how it affects your body, and the different types of diabetes.',
    color: '#E0ECDF', 
    icolor: '#8EC187',
    icon: MedicalInformation,
    lessons: [
      { 
        id: 'what-is-diabetes',
        title: 'Level 1: What is Diabetes?', 
        duration: '30 mins' 
      },
      { 
        id: 'types-of-diabetes',
        title: 'Level 2: Types of Diabetes', 
        duration: '45 mins' 
      }
    ]
  },
  {
    id: 'daily-management',
    title: 'Managing Diabetes Every Day',
    description: 'Learn about daily routines for managing diabetes, including checking blood sugar and using insulin.',
    color: '#F8EFE7',
    icolor: '#FAB26B',
    icon: CalendarMonthRounded,
    lessons: [
      { title: 'Level 1: How to Check Your Blood Sugar', duration: '30 mins' },
      { title: 'Level 2: Using Insulin Safely', duration: '45 mins' }
    ]
  },
  {
    id: 'food-nutrition',
    title: 'Eating Well with Diabetes',
    description: 'Discover how healthy eating, carb counting, and planning meals help you manage your diabetes.',
    color: '#F8F2D9', 
    icolor: '#F3DB78',
    icon: RestaurantRounded,
    lessons: [
      { title: 'Level 1: Understanding Carbs', duration: '30 mins' },
      { title: 'Level 2: Planning Healthy Meals', duration: '45 mins' }
    ]
  },
  {
    id: 'emergency-preparedness',
    title: 'Diabetes Emergencies: What to Do',
    description: 'Learn how to recognize and handle emergency situations like low or high blood sugar.',
    color: '#F4E3E3', 
    icolor: '#FC8384',
    icon: FmdBadRounded,
    lessons: [
      { title: 'Level 1: What to Do When Your Blood Sugar Is Low', duration: '30 mins' },
      { title: 'Level 2: What to Do When Your Blood Sugar Is High', duration: '45 mins' }
    ]
  },
  {
    id: 'exercise-activity',
    title: 'Staying Active with Diabetes',
    description: 'Understand how to safely incorporate exercise into your diabetes management routine.',
    color: '#D8E4F2',
    icolor: '#85B0DE',
    icon: DirectionsBikeRounded,
    lessons: [
      { title: 'Level 1: Exercise and Blood Sugar', duration: '30 mins' },
      { title: 'Level 2: Sports and Physical Activity', duration: '45 mins' }
    ]
  }
];

export const parentModules = [
  {
    id: 'diabetes-basics',
    title: 'Understanding Diabetes',
    description: 'Understand the basics of diabetes, its impact, and how to support your child in managing their condition.',
    color: '#E0ECDF', 
    icolor: '#8EC187',
    icon: HealthAndSafety,
    lessons: [
      { 
        id: 'what-is-diabetes',
        title: 'Level 1: What is Diabetes?', 
        duration: '30 mins' 
      },
      { 
        id: 'types-of-diabetes',
        title: 'Level 2: Types of Diabetes', 
        duration: '45 mins' 
      }
    ]
  },
  {
    id: 'daily-management',
    title: 'Supporting Daily Diabetes Management',
    description: 'Learn how to assist your child in developing healthy routines for blood sugar monitoring and insulin use.',
    color: '#F8EFE7',
    icolor: '#FAB26B',
    icon: MedicationLiquid,
    lessons: [
      { title: 'Level 1: Helping Your Child Check Blood Sugar', duration: '30 mins' },
      { title: 'Level 2: Insulin Management and Support', duration: '45 mins' }
    ]
  },
  {
    id: 'food-nutrition',
    title: 'Guiding Your Child’s Nutrition',
    description: 'Support your child with healthy eating, carb counting, and planning meals to help manage diabetes.',
    color: '#F8F2D9', 
    icolor: '#F3DB78',
    icon: MonitorHeartRounded,
    lessons: [
      { title: 'Level 1: Understanding Carbohydrates and Their Impact', duration: '30 mins' },
      { title: 'Level 2: Creating Meal Plans for Better Health', duration: '45 mins' }
    ]
  },
  {
    id: 'emergency-preparedness',
    title: 'Preparing for Diabetes Emergencies',
    description: 'Know how to recognize, prevent, and respond to diabetes-related emergencies to keep your child safe.',
    color: '#F4E3E3', 
    icolor: '#FC8384',
    icon: LocalHospitalRounded,
    lessons: [
      { title: 'Level 1: Recognizing Low Blood Sugar in Children', duration: '30 mins' },
      { title: 'Level 2: How to Handle High Blood Sugar Emergencies', duration: '45 mins' }
    ]
  },
  {
    id: 'exercise-activity',
    title: 'Encouraging Safe Physical Activity',
    description: 'Learn how to help your child stay active and how exercise impacts their blood sugar management.',
    color: '#D8E4F2',
    icolor: '#85B0DE',
    icon: FavoriteRounded,
    lessons: [
      { title: 'Level 1: Supporting Exercise with Diabetes', duration: '30 mins' },
      { title: 'Level 2: How to Support Sports and Activities for Your Child', duration: '45 mins' }
    ]
  }
];
