# SysTech

Удобный формат для чтения: https://www.notion.so/dissmind/SysTech-4fcc00a17f7746dbb5e8998c95fc7cdd

Стек:

Back-End

- .NET CoreApp v3.1
- System.Data.SQLite 1.0.113.7 - Коннектор SQLite
- EntityFramework 5
- ASP.NET Cors 5.2

Front-End

- React
- TypeScript
- Redux

SQLite

---

Описание архитектуры:

Back-End

- Models - описывает сущности БД, используетс

 

Модель Employer - описывает сотрудника

**Свойства**

id - string - Индификатор 

name - string - Имя

WorkedAt - string - Дата принятия на работу 

Group - string - Тип пользователя

Salary - double - Ставка

BossesId - Хранит индификатор начальника

Имеет одну перегрузку конструктора:

```csharp
Employers()
Employers(int id, string name, string workedAt, string group, int bossesId)
```

- Используется ORM, при помощи EF контекстов
- Repository - обеспечивает чтение чтения данных из БД
- Класс Payday - реализация алгоритма высчита ЗП
    - Интерфейсом класса является единственный метод: double GetPaydayEmployer(double salary, string group, int countYear, List<double> subEmployersSalary) - возвращает ЗП сотрудника
        - salary - Ставка сотрудника
        - group - Тип сотрудника
        - countYear - Стаж (в годах)
        - subEmployersSalary - Список ЗП подчиненных сотрудников

- Общение сервера и клиента на основе REST API

---

API Doc

- Payday

    Вычисление ЗП сотрудника по id за периуд

    Route: /api/get

    Params: 

    - id
    - from
    - to

    Method: GET

    Response: double

    Вычисление ЗП всех сотрудников за периуд

    Route: /api/getAll

    Params: 

    - from
    - to

    Method: GET

    Response: class

    ```csharp
    [
    	{
    		int Id, // Id Сотрудника
    		double payday // Зп
    	},
    	{
    		int Id, // Id Сотрудника
    		double payday // Зп
    	}
    ]
    ```

    Вычисление ЗП суммы всех сотрудников за периуд

    Route: /api/getSumAll

    Method: GET

    Params: 

    - from
    - to

    Response: double

- Employer

    Получение сотрудника по ID

    Route: /api/employer/{id}
    Method: GET

    Response:

    ```csharp
    {
    	int id,
    	string name,
    	string workedAt,
    	string group,
    	double salary,
    	int bossesId
    }
    ```

    Получение всех сотрудников

    Route: /api/employer

    Method: GET

    Response:

    ```csharp
    [
    	{
    		int id,
    		string name,
    		string workedAt,
    		string group,
    		double salary,
    		int bossesId
    	},
    	{
    		int id,
    		string name,
    		string workedAt,
    		string group,
    		double salary,
    		int bossesId
    	}
    ]
    ```

    Добавление нового сотрудника

    Route: /api/employer

    Method: POST

    Response:

    Params: 

    ```csharp
    int id,
    string name,
    string workedAt,
    string group,
    double salary,
    int bossesId
    ```

    Обновление данных о сотруднике

    Route: /api/employer/{id}

    Method: PUT

    Response:

    Params: int id, Employers employers

    ```csharp
    int id
    Employers employers 
    {
    	int id,
    	string name,
    	string workedAt,
    	string group,
    	double salary,
    	int bossesId
    }
    ```

    Удаление сотрудника по ID

    Route: /api/employer/{id}

    Method: DELETE

    Добавление начальника для сотрудника

    Route: api/employer/setBoss

    Method: POST

    Response:

    Params int employerId, int bossId

    ```csharp
    int employerId // Подчиненный
    int bossId // Начальник
    ```

    Удаление начальника для сотрудника

    Route: api/employer/deleteBoss/{id}

    Method: POST

    Response:

    Params int id
