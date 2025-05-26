import { Calendar, dateFnsLocalizer} from 'react-big-calendar';
import { format } from 'date-fns/format';
import { es } from 'date-fns/locale';
import { getDay, parse, startOfWeek } from 'date-fns';


import 'react-big-calendar/lib/css/react-big-calendar.css';


const locales = {
    'es': es,
    'default': es,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const eventos = [
  {
    title: 'Asamblea General',
    start: new Date(2025, 4, 10, 12, 0),
    end: new Date(2025, 4, 10, 13, 0),
  },
  {
    title: 'Taller de CV',
    start: new Date(2025, 4, 14, 15, 0),
    end: new Date(2025, 4, 14, 17, 0),
  },
  {
    title: 'JCC',
    start: new Date(2025, 4, 14, 15, 0),
    end: new Date(2025, 4, 14, 17, 0),
  },
  {
    title: 'JCC2: Electric Boogaloo',
    start: new Date(2025, 4, 29, 15, 0),
    end: new Date(2025, 4, 29, 17, 0),
  },

];

const Eventos = () => {
    return(
        <div style={{ padding: '2rem', minHeight: '80vh' }}>
            <h2 style={{ marginBottom: '1rem' }}>Calendario de Eventos</h2>
            <Calendar
                localizer={localizer}
                events={eventos}
                startAccessor="start"
                endAccessor="end"
                culture='es'
                style={{ height: 500 }}
                messages={{
                next: "Siguiente",
                previous: "Anterior",
                today: "Hoy",
                month: "Mes",
                week: "Semana",
                day: "Día",
                agenda: "Agenda",
                noEventsInRange: "No hay eventos en este rango.",
                }}
            />
        </div>
    );
}

export default Eventos;