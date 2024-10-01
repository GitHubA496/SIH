
import mongoose from 'mongoose';

const plantSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  plant: {
    name: {
      type: String,
      required: true,
    },
    scientific_name: {
      type: String,
      required: true,
    },
    overview: {
      description: {
        type: String,
        required: true,
      },
      origin: {
        type: String,
        required: true,
      },
      did_you_know: {
        type: String,
        required: true,
      }
    },
    features: {
      climate: {
        type: String,
        required: true,
      },
      plant_type: {
        type: String,
        required: true,
      },
      sunlight: {
        type: String,
        required: true,
      },
      soil_type: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        required: true,
      },
      water: {
        type: String,
        required: true,
      },
      ph: {
        type: String,
        required: true,
      },
      native_area: {
        type: String,
        required: true,
      },
      altitude: {
        type: String,
        required: true,
      }
    },
    medicinal_benefits: {
      stress_relief: {
        type: String,
        required: true,
      },
      energy_boost: {
        type: String,
        required: true,
      },
      cognitive_function: {
        type: String,
        required: true,
      },
      immune_support: {
        type: String,
        required: true,
      }
    },
    audio_story: {
      description: {
        type: String,
        required: true,
      }
    }
  }
});

const Plant = mongoose.model('Plant', plantSchema);

export default Plant;
