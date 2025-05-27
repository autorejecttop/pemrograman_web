<?php
$calendar_date = !$_GET["date"] ? new DateTime() : new DateTime($_GET["date"]);


function previous_month($calendar_date)
{
    $temp = clone $calendar_date;

    $temp->sub(new DateInterval("P1M"));

    return $temp->format("Y-m");
}

function next_month($calendar_date)
{
    $temp = clone $calendar_date;

    $temp->add(new DateInterval("P1M"));

    return $temp->format("Y-m");
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendar</title>
    <link rel="stylesheet" href="<?= basename(__DIR__); ?>/styles.css">
</head>

<body>
    <main>
        <div class="calendar_controls">
            <a href="?date=<?= previous_month($calendar_date) ?>">&lt;&lt; Bulan Sebelumnya</a>
            <span>
                <?= $calendar_date->format("F Y") ?>
            </span>
            <a href="?date=<?= next_month($calendar_date) ?>">Bulan Sebelumnya &gt;&gt;</a>
        </div>
        <table>
            <thead>
                <th>Minggu</th>
                <th>Senin</th>
                <th>Selasa</th>
                <th>Rabu</th>
                <th>Kamis</th>
                <th>Jumat</th>
                <th>Sabtu</th>
            </thead>
            <tbody>
                <?php
                $count = 1;
                $current_date = new DateTime();

                for ($i = 0; $i < 6; $i++) {
                    echo "<tr>";

                    for ($j = 0; $j < 7; $j++) {
                        $temp_date = clone $calendar_date;
                        $temp_date->modify("first day of this month");
                        $first_day_of_this_month = $temp_date->format("w");

                        echo $current_date->format("d") == $count - $first_day_of_this_month ? "<td class='current_date'>" : "<td>";
                        if ($count > $first_day_of_this_month && $count - $first_day_of_this_month <= $calendar_date->format("t")) {
                            echo $count - $first_day_of_this_month;
                        }
                        echo "</td>";

                        $count++;
                    }

                    echo "</tr>";
                }
                ?>
            </tbody>
        </table>
    </main>
</body>

</html>