import { useCallback, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Agenda,
  AgendaList,
  Calendar,
  CalendarProvider,
  ExpandableCalendar,
  LocaleConfig,
  MyCustomList,
  WeekCalendar,
  calendarTheme
} from 'react-native-calendars';
import tw from 'twrnc';

import AgendaItem from '../mocksCalendar/AgendaItem';
import { agendaItems, getMarkedDates } from '../mocksCalendar/agendaItems';
// import testIDs from '../mocksCalendar';
import { getTheme, lightThemeColor, themeColor } from '../mocksCalendar/theme';

const ITEMS = agendaItems;

const MyCalendar = props => {
  const [selected, setSelected] = useState('');
  // console.log(testIDs);
  const { weekView } = props;
  const marked = useRef(getMarkedDates());
  const theme = useRef(getTheme());
  const todayBtnTheme = useRef({
    todayButtonTextColor: themeColor
  });

  // const onDateChanged = useCallback((date, updateSource) => {
  //   console.log('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
  // }, []);

  // const onMonthChange = useCallback(({dateString}) => {
  //   console.log('ExpandableCalendarScreen onMonthChange: ', dateString);
  // }, []);

  const renderItem = useCallback(({ item }) => {
    return <AgendaItem item={item} />;
  }, []);
  return (
    <View
      style={tw.style(
        'flex flex-col justify-center h-100% items-center dark:bg-black'
      )}
    >
      <Text style={tw`text-black dark:text-white`}>Calendar</Text>
      {/* <Calendar
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: 400,
          borderRadius: 10
        }}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: 'orange'
          }
        }}
      /> */}

      <CalendarProvider
        // date={ITEMS[1]?.title}
        // onDateChanged={onDateChanged}
        // onMonthChange={onMonthChange}
        showTodayButton
        // disabledOpacity={0.6}
        theme={todayBtnTheme.current}
        // todayBottomMargin={16}
      >
        {weekView ? (
          <WeekCalendar
            // testID={testIDs.weekCalendar.CONTAINER}
            firstDay={1}
            markedDates={marked.current}
          />
        ) : (
          <ExpandableCalendar
            // testID={testIDs.expandableCalendar.CONTAINER}
            // horizontal={false}
            // hideArrows
            // disablePan
            // hideKnob
            // initialPosition={ExpandableCalendar.positions.OPEN}
            // calendarStyle={styles.calendar}
            // headerStyle={styles.header} // for horizontal only
            // disableWeekScroll
            theme={theme.current}
            // disableAllTouchEventsForDisabledDays
            firstDay={1}
            markedDates={marked.current}
            leftArrowImageSource={'<='}
            rightArrowImageSource={'=>'}
            // animateScroll
            // closeOnDayPress={false}
          />
        )}
        <AgendaList
          sections={ITEMS}
          renderItem={renderItem}
          // scrollToNextEvent
          sectionStyle={styles.section}
          // dayFormat={'yyyy-MM-d'}
        />
      </CalendarProvider>

      {/* <Agenda
        // The list of items that have to be displayed in agenda. If you want to render item as empty date
        // the value of date key has to be an empty array []. If there exists no value for date key it is
        // considered that the date in question is not yet loaded
        items={{
          '2012-05-22': [{ name: 'item 1 - any js object' }],
          '2012-05-23': [{ name: 'item 2 - any js object', height: 80 }],
          '2012-05-24': [],
          '2012-05-25': [
            { name: 'item 3 - any js object' },
            { name: 'any js object' }
          ]
        }}
        // Callback that gets called when items for a certain month should be loaded (month became visible)
        loadItemsForMonth={month => {
          console.log('trigger items loading');
        }}
        // Callback that fires when the calendar is opened or closed
        onCalendarToggled={calendarOpened => {
          console.log(calendarOpened);
        }}
        // Callback that gets called on day press
        onDayPress={day => {
          console.log('day pressed');
        }}
        // Callback that gets called when day changes while scrolling agenda list
        onDayChange={day => {
          console.log('day changed');
        }}
        // Initially selected day
        selected={'2012-05-16'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2012-05-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2012-05-30'}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Specify how each item should be rendered in agenda
        renderItem={(item, firstItemInDay) => {
          return <View />;
        }}
        // Specify how each date should be rendered. day can be undefined if the item is not first in that day
        renderDay={(day, item) => {
          return <View />;
        }}
        // Specify how empty date content with no items should be rendered
        renderEmptyDate={() => {
          return <View />;
        }}
        // Specify how agenda knob should look like
        renderKnob={() => {
          return <View />;
        }}
        // Override inner list with a custom implemented component
        renderList={listProps => {
          return <MyCustomList {...listProps} />;
        }}
        // Specify what should be rendered instead of ActivityIndicator
        renderEmptyData={() => {
          return <View />;
        }}
        // Specify your item comparison function for increased performance
        rowHasChanged={(r1, r2) => {
          return r1.text !== r2.text;
        }}
        // Hide knob button. Default = false
        hideKnob={true}
        // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
        showClosingKnob={false}
        // By default, agenda dates are marked if they have at least one item, but you can override this if needed
        markedDates={{
          '2012-05-16': { selected: true, marked: true },
          '2012-05-17': { marked: true },
          '2012-05-18': { disabled: true }
        }}
        // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
        disabledByDefault={true}
        // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
        onRefresh={() => console.log('refreshing...')}
        // Set this true while waiting for new data from a refresh
        refreshing={false}
        // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
        refreshControl={null}
        // Agenda theme
        theme={{
          ...calendarTheme,
          agendaDayTextColor: 'yellow',
          agendaDayNumColor: 'green',
          agendaTodayColor: 'red',
          agendaKnobColor: 'blue'
        }}
        // Agenda container style
        style={{}}
      /> */}
    </View>
  );
};

export default MyCalendar;

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    backgroundColor: 'lightgrey'
  },
  section: {
    backgroundColor: lightThemeColor,
    color: 'grey',
    textTransform: 'capitalize'
  }
});
