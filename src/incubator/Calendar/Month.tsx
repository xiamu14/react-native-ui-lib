import React, {useContext, useMemo} from 'react';
import View from '../../components/view';
import {getWeekNumbersOfMonth} from './helpers/DateUtils';
import {MonthProps} from './types';
import CalendarContext from './CalendarContext';
import Week from './Week';

function Month(props: MonthProps) {
  const {year, month} = props;
  const {firstDayOfWeek} = useContext(CalendarContext);

  const weekNumbers = useMemo(() => {
    return getWeekNumbersOfMonth(year, month, firstDayOfWeek);
  }, [year, month, firstDayOfWeek]);

  return (
    <View>
      {weekNumbers.map(weekNumber => {
        // eslint-disable-next-line react/jsx-key
        return <Week weekNumber={weekNumber} year={year} month={month}/>;
      })}
    </View>
  );
}

export default Month;
