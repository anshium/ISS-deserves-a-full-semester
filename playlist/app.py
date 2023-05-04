import sqlite3
from flask import Flask, render_template, request


app = Flask(__name__)


@app.route('/playlist', methods=['GET','POST'])
def playlist():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('SELECT name FROM songs')
    songs = cursor.fetchall()
    conn.close()
    if len(songs) == 0:
        message = "No songs have been added yet!"
    else:
        message = None
    return render_template('playlist.html', songs=songs, message=message)


@app.route('/remove/<song_name>', methods=['POST'])
def remove_song(song_name):
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('DELETE FROM songs WHERE name=?', (song_name,))
    conn.commit()
    conn.close()
    return redirect(url_for('playlist'))


if __name__ == '__main__':
    app.run(debug=True)
