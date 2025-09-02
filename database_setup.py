import mysql.connector

DB_CONFIG = {
    'host': 'localhost',
    'user': 'formatter_user',
    'password': 'strongpassword123',
    'database': 'assignment_formatter_db'
}

def create_tables():
    try:
        conn = mysql.connector.connect(**DB_CONFIG)
        cursor = conn.cursor()

        # Create submissions table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS submissions (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT,
                submission_text TEXT NOT NULL,
                formatted_file_path VARCHAR(255),
                export_format VARCHAR(10) NOT NULL,
                spell_check_enabled BOOLEAN,
                auto_correct_enabled BOOLEAN,
                heading_detection_enabled BOOLEAN,
                submission_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)

        # Create payments table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS payments (
                id INT AUTO_INCREMENT PRIMARY KEY,
                submission_id INT NOT NULL,
                transaction_id VARCHAR(255) NOT NULL,
                amount DECIMAL(10, 2) NOT NULL,
                currency VARCHAR(10) NOT NULL,
                payment_status VARCHAR(50) NOT NULL,
                payment_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (submission_id) REFERENCES submissions(id)
            )
        """)

        conn.commit()
        print("Database tables created successfully!")

    except mysql.connector.Error as err:
        print(f"Error: {err}")
    finally:
        if 'conn' in locals() and conn.is_connected():
            cursor.close()
            conn.close()

if __name__ == '__main__':
    create_tables()
