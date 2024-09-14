import { updateCurrentTime } from './updateCurrentTime';

const NextLessonOrModule = ({ modules, video }) => {
  const indexModule = modules.findIndex(
    (module) => module.id === video.moduel_id
  );

  const indexLesson = modules[indexModule].lessons.findIndex(
    (lesson) => lesson.id === parseInt(video.lesson_id.toString())
  );

  let nextModule = false;
  if (video.current_lesson < modules[indexModule].lessons.length - 1) {
    modules[indexModule].lessons[indexLesson].status = 'finish';
    modules[indexModule].current_lesson = parseInt(video.current_lesson) + 1;
    modules[indexModule].lessons[indexLesson + 1].status = 'active';
    updateCurrentTime(
      0,
      false,
      modules[indexModule].lessons[indexLesson + 1].id
    );
  } else if (indexModule <= modules.length - 1) {
    modules[indexModule].lessons[indexLesson].status = 'finish';
    if (modules[indexModule + 1]) {
      modules[indexModule + 1].lessons[0].status = 'active';
      modules[indexModule + 1].current_lesson = 0;
      updateCurrentTime(0, false, modules[indexModule + 1].lessons[0].id);
      nextModule = true;
    }
  }

  return {
    modules,
    nextModule,
  };
};

export { NextLessonOrModule };
