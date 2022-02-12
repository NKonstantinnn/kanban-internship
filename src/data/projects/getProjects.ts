import { ProjectData } from '@/types/projects';

export function getProjectList(): ProjectData[] {
  return [
    {
      id: '32r23jerwjngw',
      name: 'Поедание пельменей',
      description: 'Нужно съесть 20 пельменей',
    },
    {
      id: 'hc8r3r48gt',
      name: 'Уборка комнаты',
      description: 'Убрать зал и кухню',
    },
  ];
}