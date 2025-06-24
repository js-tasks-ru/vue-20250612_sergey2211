import {defineComponent, onMounted, ref, watch} from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const selected = ref(1);
    const min = 1;
    const max = 5;
    const meetupIdList = ref(Array.from({ length: max }, (_, k) => k + 1));
    const title = ref('');

    watch(selected, async () => {
     title.value = (await getMeetup(selected.value)).title;
    })

    onMounted(async () => {
      title.value = (await getMeetup(min)).title;
    })

    return {
      selected,
      meetupIdList,
      max,
      min,
      title
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button
          class="button button--secondary"
          type="button"
          :disabled="selected <= min"
          @click="selected--"
        >
          Предыдущий
        </button>

        <div class="radio-group" role="radiogroup">

          <div v-for="meetupId in meetupIdList" class="radio-group__button">
            <input
              v-model="selected"
              :id="'meetup-id-' + meetupId"
              :value="meetupId"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              @click="selected = meetupId"
            />
            <label
              :for="'meetup-id-' + meetupId"
              class="radio-group__label"
            >
              {{ meetupId }}
            </label>
          </div>
        </div>

        <button
          :disabled="selected >= max"
          class="button button--secondary"
          type="button"
          @click="selected++"
        >
          Следующий
        </button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title"> {{ title }} </h1>
        </div>
      </div>

    </div>
  `,
})
