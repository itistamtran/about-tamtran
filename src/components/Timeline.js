import React from 'react';

const Timeline = ({ events }) => {
    return (
        <div style={styles.timeline}>
            {events.map((event, index) => (
                <div key={index} style={styles.entry}>
                    <div style={styles.marker}></div>
                    <div style={styles.content}>
                        <div style={styles.date}>{event.date}</div>
                        <div style={styles.title}>{event.title}</div>
                        <div style={styles.description}>{event.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const styles = {
    timeline: {
        position: 'relative',
        width: '2px',
        backgroundColor: 'transperent',
        margin: '0 auto',
    },
    entry: {
        position: 'relative',
        width: '100%',
        marginBottom: '20px',
    },
    marker: {
        position: 'absolute',
        width: '12px',
        height: '12px',
        backgroundColor: 'white',
        border: '2px solid black',
        left: '-5px',
    },
    content: {
        marginLeft: '20px',
        color: 'white',
        textAlign: 'left',
    },
    date: {
        fontSize: '1rem',
    },

};

export default Timeline;
