<?php
$multiple = isset($_GET["multiple"]) && $_GET["multiple"] != "" ? $_GET["multiple"] : 1;
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiples</title>
    <link rel="stylesheet" href="<?= basename(__DIR__); ?>/styles.css">
</head>

<body>
    <main>
        <form action="" method="GET">
            <label for="multiple">
                Masukkan Kelipatan :
                <input min="1" type="number" name="multiple" id="multiple" />
            </label>

            <button type="submit">Kirim</button>
        </form>
        <h1>
            Kelipatan dari <?= $multiple ?>
        </h1>
        <table>
            <thead>
                <tr>
                    <th id="angka">Angka</th>
                    <th id="kelipatan">Kelipatan</th>
                </tr>
            </thead>
            <tbody>
                <?php
                for ($i = 1; $i <= 40; $i++) {
                    echo "<tr>";
                    echo "<td>$i</td>";

                    echo $i % $multiple == 0
                        ? "<td class='multiples'>$i (kelipatan dari $multiple)</td>"
                        : "<td>$i</td>";

                    echo "</tr>";
                }
                ?>
            </tbody>
        </table>
    </main>
</body>

</html>